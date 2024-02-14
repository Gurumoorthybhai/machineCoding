function superFetch(url, callback, init = {}) {
    console.log(' url ', url);
    console.log(' callback ', callback);

    if (!navigator.serviceWorker.controller == null) {
        handleFetchWithoutServiceWorkers(url, callback);
        return;
    }

    if (init.headers) {
        init.headers.superFetch = 'true';
    } else {
        init.headers = {
            superFetch: 'true'
        }
    }

    preFetch(url).then((serviceWorkerPrefetchMessage) => {
        console.log(' serviceWorkerPrefetchMessage - ', serviceWorkerPrefetchMessage);

    }).catch((err) => {

    })

}

function callBackRes(res) {
    console.log('callBackRes res ', res);

}
superFetch('https://swapi.dev/api/pople/1', (res) => {
    callBackRes(res);
});

function handleFetchWithoutServiceWorkers(url, callback, errorCallback) {

    fetch(url).then(res => {
        console.log(' res ', res);
        const contentType = res.headers.get('content-type');
        console.log(' contentType ', contentType);


        // check res is returned successfully JSON

        if (res.status >= 200 && res.status < 300 && contentType?.indexOf('application/json') !== -1) {
            res.json().then(payload => {
                payload.networkCallTimeStamp = new Date().toJSON();
                callback(payload);
            })
        }
        else if (res.status >= 400) {
            if (errorCallback != null) {
                errorCallback(res);
            }
            else {
                console.log("res.status >= 400 else");

                res.json().then(err => callback(err));
            }
        }
        else {
            callback(res);
        }


    }).catch(error => {
        console.log(' catch ');

        if (errorCallback != null) {
            errorCallback(error);
        }
        else {
            callback(error);
        }
    })
}

function prefetch() {

    if (navigator.serviceWorker.controller == null) {
        console.warn('The service worker is not yet registered or it is not supported by this browser');

        return Promise.resolve({
            type: 'PRE_FETCH_RESPONSE',
            case: 'NO_DATA_FROM_PRE_FETCH',
            prefetchPid: '0',
            responseIsStale: false
        });

    }
}