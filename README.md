# json-rpc-cli

这个package 是在 JSON RPC 的客户端中使用，传入您的`action`和对应参数即可在JS是获取到信息；

# Install

```
npm install json-rpc-cli --save
```

# 使用方法演示

## then/catch
```
let rpc = require('json-rpc-cli');
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
asyncfunc(opt).then(data => {
    console.log(' ------------- Success ------------- ')
    console.log(data)
}).catch(err => {
    console.log(' ------------- Error ------------- ')
    console.log(err)
})

```


## await/async

```
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
```