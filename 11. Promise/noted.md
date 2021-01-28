# Promise

    "Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang"

- Janji ada 2 keadaan, yaitu: terpenuhi dan ingkar janji
- Di Javascript ada 2 keadaan, yaitu: fulfilled, rejected, dan pending

* Fungsi Callbacknya

- Resolve : terpenuhi
- Reject : tidak terpenuhi
- Finally : terpenuhi ataupun tidak tetep dieksekusi

- Di promise harus ada aksi yang dilakukan saat aksinya terpenuhi maupun tidak terpenuhi.
- aksi -> then (resolve) dan catch (reject)

- Promise biasanya digunakan untuk melakukan request ke API
