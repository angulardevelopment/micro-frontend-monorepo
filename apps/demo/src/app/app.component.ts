import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
import { ZegoLocalStreamConfig, ZegoWebPlayOption } from 'zego-express-engine-webrtc/sdk/code/zh/ZegoExpressEntity.web';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';

  getBrow = () => {
    const result: any = function () {
        var u = navigator.userAgent;
        return {
            // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            ios: u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1,
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
        };
    }()

    for (let brow in result) {
        if (result[brow]) return brow
    }
    return 'web'
}
  constructor(public http: HttpClient) {

  }

  appID = 0; //
  server = `wss://webliveroom${this.appID}-api.coolzcloud.com/ws`; //
  // tokenUrl: string = 'https://wsliveroom-alpha.zego.im:8282/token';
  // userID: string = this.getBrow() + '_' + new Date().getTime();
  userID = 'web_1674732306194';
  roomID: string = '0001';
  // token = '';
  token: string = '04AAAAAGPTtJsAEHp2MTNqYXRqaGo0NzRnZjEAsKmLpimsYZV1YYOOiA/uSWnBfpuLKe4H6Z3EnhlB8AAOBY23xBpHZRo+eCiUh0SEqCMMg9zyvW86O3DfnUZg1xtI9qGhwiNFR6SpQflWynHxfJa3nSgpbyQmUVLj6iHl3fi8+sSozlkmHZJ/LjABRwcbxPW6eYSencEIq9xd0AAcqEgn1641toKGU4ChWGWQkSKtEYiP/+E+WX8+B3fvV6KYO0JfLcRx4S5mpzfVzb67';
  streamID: string = '0001';
  playStreamID: string = '0001';
  zg: ZegoExpressEngine = {} as ZegoExpressEngine;
  localStream: MediaStream | null = null;
  remoteStream: MediaStream | null= null;
  isLogin: boolean = false;
  videoCodec: ReadingTypes = localStorage.getItem('VideoCodec') === 'H.264' ? 'H264' : 'VP8';
  createSuccessSvgStatus: Boolean = false;
  connectStatus: string = 'DISCONNECTED';
  checkSystemRequireStatus: string = "";
  audioDeviceList: DeviceInfo[] = [];
  videoDeviceList: DeviceInfo[] = [];
  microphoneDevicesVal  = 0;
  cameraDevicesVal: string = "";
  cameraCheckStatus: boolean = true;
  microphoneCheckStatus: boolean = true;
  publishStreamStatus: boolean = false;
  mirrorVal: string = "none";
  playStreamStatus: boolean = false;
  videoCheckStatus: boolean = true;
  audioCheckStatus: boolean = false;
  publishInfoStreamID: string = "";
  playInfoStreamID: string = "";

  async ngOnInit()
  {
    // this.createZegoExpressEngineOption();
  }

  // part of step2
  async enumDevices() {
    const deviceInfo = await this.zg.enumDevices();
    this.audioDeviceList = deviceInfo &&
      deviceInfo.microphones.map((item: DeviceInfo, index: number) => {
        if (!item.deviceName) {
          item.deviceName = 'microphone' + index;
        }
        console.log('microphone: ' + item.deviceName);
        return item;
      });
    this.audioDeviceList.push({ deviceID: '0', deviceName: 'demo' });
    this.microphoneDevicesVal = +this.audioDeviceList[0].deviceID;
    this.videoDeviceList = deviceInfo &&
      deviceInfo.cameras.map((item: DeviceInfo, index: number) => {
        if (!item.deviceName) {
          item.deviceName = 'camera' + index;
        }
        console.log('camera: ' + item.deviceName);
        return item;
      });
    this.videoDeviceList.push({ deviceID: '0', deviceName: 'demo' });
    this.cameraDevicesVal = this.videoDeviceList[0].deviceID;
  }

  // part of step1
  initEvent() {
    this.zg.on('roomStateUpdate', (roomId: string, state: string) => {
      console.log('initEvent roomStateUpdate', roomId, state);
      if (state === 'CONNECTED') {
        this.connectStatus = 'CONNECTED';
      }
      if (state === 'DISCONNECTED') {
        this.connectStatus = 'DISCONNECTED';
      }
    })

    this.zg.on('publisherStateUpdate', (result: any) => {
      console.log('initEvent publisherStateUpdate', result);
      if (result.state === 'PUBLISHING') {
        this.publishInfoStreamID = result.streamID;
      } else if (result.state === 'NO_PUBLISH') {
        this.publishInfoStreamID = "";
      }
    });

    this.zg.on('playerStateUpdate', (result: any) => {
      console.log('initEvent playerStateUpdate', result);
      if (result.state === 'PLAYING') {
        this.playInfoStreamID = result.streamID;
      } else if (result.state === 'NO_PLAY') {
        this.playInfoStreamID = "";
      }
    });


  }

  getAppInfo() {
    let appID = this.appID; //  Please obtain the corresponding appid from the official website console
    let server =  this.server; //  Please obtain the corresponding server address from the console on the official website, otherwise the login may fail
    // var baseURL = window.location.href.match(/.*\/Examples/)[0]
    // get local appID and server
    let appInfo = {}
    // if (!appID || !server) {
    //   try {
    //     const appInfoStr = localStorage.getItem("app_info") as string;
    //     const parseAppInfo = JSON.parse(appInfoStr)
    //     appInfo = parseAppInfo || appInfo
    //   } catch (error) {
    //     localStorage.removeItem("app_info")
    //   }
    //   if (!appInfo.appID || !appInfo.server) {
    //     alert("Need to set appID and server url!")
    //     // window.location.href = `${baseURL}/DebugAndConfig/InitSettings/index.html${location.search}`
    //   }
    // } else {
      localStorage.setItem("app_info", JSON.stringify({
        appID,
        server
      }))
    // }
    appInfo = {appID, server}
    // this.appID = appInfo.appID;
    // this.server = appInfo.server;
  }


  createZegoExpressEngine() {
    this.getAppInfo();
    this.zg = new ZegoExpressEngine(this.appID, this.server);
  }


  async checkSystemRequirements() {
    console.log('sdk version is', this.zg.getVersion());
    try {
      const result = await this.zg.checkSystemRequirements();

      console.warn('checkSystemRequirements ', result);

      if (!result.webRTC) {
        console.error('browser is not support webrtc!!');
        return false;
      } else if (!result.videoCodec?.H264 && !result.videoCodec?.VP8) {
        console.error('browser is not support H264 and VP8');
        return false;
      } else if (!result.camera && !result.microphone) {
        console.error('camera and microphones not allowed to use');
        return false;
      } else if (result.videoCodec.VP8) {
        if (!result.screenSharing) console.warn('browser is not support screenSharing');
      } else {
        console.log('vp8');
      }
      return true;
    } catch (err) {
      console.error('checkSystemRequirements', err);
      return false;
    }
  }

  async loginRoom(roomId: string, userId: string, userName: string, token: string) {
    return this.zg.loginRoom(roomId, token, {
      userID: userId,
      userName
    })


  }


  async startPublishingStream(streamId: string, config: ZegoLocalStreamConfig ) {
    try {
      this.localStream = await this.zg.createStream(config);
      this.zg.startPublishingStream(streamId, this.localStream, { videoCodec: this.videoCodec });
      return true;
    } catch (err) {
      return false;
    }
  }


  async startPlayingStream(streamId: string, options: ZegoWebPlayOption  = {}) {
    try {
      this.remoteStream = await this.zg.startPlayingStream(streamId, options);
      return true;
    } catch (err) {
      return false;
    }
  }

  // Logout room
  logoutRoom(roomId: string) {
    this.zg.logoutRoom(roomId);
  }

  // Stop Publishing Stream
  async stopPublishingStream(streamId: string) {
    this.zg.stopPublishingStream(streamId);
  }

  // Stop Play Stream
  async stopPlayingStream(streamId: string) {
    this.zg.stopPlayingStream(streamId);
  }

  clearStream() {
    this.localStream && this.zg.destroyStream(this.localStream);
    //   this.$refs['publishVideo'].srcObject = null;
    this.localStream = null;
    this.remoteStream && this.zg.destroyStream(this.remoteStream);
    //   this.$refs['playVideo'].srcObject = null;
    this.remoteStream = null;
  }

  changeAudioDevices() {
    if (!this.zg || !this.localStream) {
      return
    }
    const isMicrophoneMuted = this.zg.isMicrophoneMuted();
    if (!isNaN(this.microphoneDevicesVal) && !isMicrophoneMuted) {
      this.zg.muteMicrophone(true);
    } else {
      this.zg.muteMicrophone(false);
      this.zg.useAudioDevice(this.localStream, this.microphoneDevicesVal.toString());
    }
  }
  // ==============================================================
  // This part of the code binds the button click event
  // ==============================================================
    // Step1 Create ZegoExpressEngine
  createZegoExpressEngineOption(): void {
    this.createZegoExpressEngine();
    this.createSuccessSvgStatus = true;
    this.initEvent();
  }
  // Step2 Check system requirements - optional
  async checkSystemRequire() {
    if (!this.zg) return alert('you should create zegoExpressEngine');
    const result = await this.checkSystemRequirements();
    if (result) {
      this.checkSystemRequireStatus = 'SUCCESS';
      this.enumDevices();
    } else {
      this.checkSystemRequireStatus = 'ERROR';
    }
  }

  //Step3 Login room
  async loginRoomOption() {
    if (!this.zg) return alert('you should create zegoExpressEngine');
    try {
      this.isLogin = true;
      await this.loginRoom(this.roomID, this.userID, this.userID, this.token);
    } catch (err) {
      this.isLogin = false;
      console.log(err);
    }
  }

    // Step4 Start Publishing Stream
  async startPublishing() {
    const flag = await this.startPublishingStream(this.streamID, {
      camera: {
        audioInput: this.microphoneDevicesVal.toString(),
        videoInput: this.cameraDevicesVal,
        video: this.cameraCheckStatus,
        audio: this.microphoneCheckStatus,
      }
    })
    if (flag) {
      this.publishStreamStatus = true;
    }
  }

    // Step5 Start Play Stream - subscribing the stream
  async startPlaying() {
    const flag = await this.startPlayingStream(this.playStreamID, {
      video: this.videoCheckStatus,
      audio: this.audioCheckStatus
    });
    if (flag) {
      this.playStreamStatus = true;
    }
  }

  async reset() {
    if (!this.zg) {
      return
    }
    await this.stopPublishingStream(this.streamID);
    await this.stopPlayingStream(this.playStreamID);
    if (this.isLogin) {
      this.isLogin = false;
      this.logoutRoom(this.roomID);
    }
    this.clearStream();
    this.zg = {} as ZegoExpressEngine;
    this.playStreamStatus = false;
    this.publishStreamStatus = false;
    this.createSuccessSvgStatus = false;
    this.checkSystemRequireStatus = '';
    this.audioCheckStatus = false;
  }


}

export interface DeviceInfo {
  deviceID:string,
  deviceName:string
}

export type ReadingTypes = 'H264' | 'VP8';

