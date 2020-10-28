import { App } from "./App"
import { UserModel } from "./model/UserModel"

// app.use( express.static('E:/izhou/wordbookService/'));   //静态文件
App.ins().init([UserModel,])

var server = App.ins().app.listen(8081, function () {

  //   var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://127.0.0.1:%s", port)
  console.log("应用实例，访问地址为 http://192.168.0.247:%s", port)

})



import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "test",
  entities: [
    Photo    // <==== 将需要操作的 Entity 导入进来
  ],
  synchronize: true,
  logging: false
}).then(async connection => {
  // let photo = new Photo();
  // photo.name = "Me and Bears";
  // photo.description = "I am near polar bears";
  // photo.filename = "photo-with-bears.jpg";
  // photo.views = 1;
  // photo.isPublished = true;

  // return connection.manager
  //   .save(photo)
  //   .then(photo => {
  //     console.log("Photo has been saved. Photo id is", photo.id);
  //   });

  /*...*/

  let photoRepository = connection.getRepository(Photo);

  // let photoToUpdate = await photoRepository.findOne(1);   // <=== 操作1：查询数据
  // if (photoToUpdate !== undefined) {
  //   photoToUpdate.name = "Me, my friends and polar bears";
  //   await photoRepository.save(photoToUpdate);      // <=== 操作2：修改数据
  // }


  /* 查询所有照片 */
  let allPhotos1 = await photoRepository.find();
  console.log("All photos from the db: ", allPhotos1);

  /* 查询 id = 1 的第一条数据 */
  let firstPhoto = await photoRepository.findOne(1);
  console.log("First photo from the db: ", firstPhoto);

  /* 查询 name = 'Me and Bears' 的第一条数据 */
  let meAndBearsPhoto = await photoRepository.findOne({ name: "Me and Bears" });
  console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

  /* 查询 views = 1 的所有数据 */
  let allViewedPhotos = await photoRepository.find({ views: 1 });
  console.log("All viewed photos: ", allViewedPhotos);

  /* 查询 isPublished = true 的所有数据 */
  let allPublishedPhotos = await photoRepository.find({ isPublished: true });
  console.log("All published photos: ", allPublishedPhotos);

  /* 查询数据和数目 */
  let [allPhotos, photosCount] = await photoRepository.findAndCount();
  console.log("All photos: ", allPhotos);
  console.log("Photos count: ", photosCount);

}).catch(error => console.log(error));