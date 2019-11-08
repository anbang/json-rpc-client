(async () => {
    // let rpc = require('json-rpc-cli');
    let rpc = require('../index');

    const options = {
        host: "127.0.0.1",
        port: 8765
    };
    let client = new rpc.Client(options);

    function asyncfunc(opt) {
        return new Promise((resolve, reject) => {
            client.call(opt,
                function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res)
                    }
                }
            );
        })
    }
    console.log(' ------------- Start ------------- ')
    let opt = {
        "action": "account_create",
        "password": '12345678'
    };
    let res = await asyncfunc(opt);
    console.log(res);
    console.log(' ------------- End ------------- ')
})()