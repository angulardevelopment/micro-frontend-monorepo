  export const getBrow = () => {
    const result: any = function () {
        const u = navigator.userAgent;
        return {
            // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            ios: u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1,
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
        };
    }()

    for (const brow in result) {
        if (result[brow]) return brow
    }
    return 'web'
}