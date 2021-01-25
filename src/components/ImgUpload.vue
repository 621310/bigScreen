<template>
            <div class="img_box">

                <div class="img_size"
                     v-for="(item,index) of imgList"
                     :key="index"
                >
                    <img v-if="item.file.type.indexOf('image') !== -1" :src="item.file.src">
                    <img class="remove_img"  @click="fileDel(index)" src="../assets/img/delete.png" alt="">
                </div>

                <div class="add_img" @click="fileClick" v-show="addState">
                    <img src="../assets/img/imgupload.png" alt="">
                </div>

                <input
                        id="inpu"
                        name="files"
                        style="display: none;"
                        @change="fileChange($event)"
                        type="file"
                        ref="file"
                        accept="image/*"
                        multiple
                >
            </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [],
                addState: true
            };
        },
        methods: {
            fileClick() {
                document.getElementById("inpu").click();
            },
            fileChange(el) {
                if(this.imgList.length >= 3){
                    this.$toast("最多上传三张")
                    return;
                }
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = "";
            },
            fileList(fileList) {
                console.log(fileList.files)
                let files = fileList.files;
                if (files.length >= 3){
                    this.$toast("最多上传三张")
                    return;
                }
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != "") {
                        this.fileAdd(files[i]);
                        console.log(this.imgList)
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            //文件夹处理
            folders(files) {
                let _this = this;
                //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function(file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                });
            },
            foldersAdd(entry) {
                let _this = this;
                entry.file(function(file) {
                    _this.fileAdd(file);
                });
            },
            fileAdd(file) {
                //总大小
                this.size = this.size + file.size;
                let reader = new FileReader();
                reader.vue = this;
                reader.readAsDataURL(file);
                reader.onload = function() {
                    file.src = this.result;
                    this.vue.imgList.push({
                        file
                    });
                };
            },
            fileDel(index) {
                this.imgList.splice(index, 1);
            },
        }
    };
</script>

<style scoped lang="less">
    @import "src/styles/variables";

    .img_box {
        width: 100%;
        padding: 0 2%;
        display: flex;
        flex-wrap: wrap;
        .img_size {
            position: relative;
            .hw(120px,120px);
            padding: 5px;
            img {
                width: 100%;
                height: 100%;
            }
            .remove_img {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 5px;
                right: 5px;
            }
        }
        .add_img {
            .hw(120px,120px);
            padding: 5px;
            img{
                .hw(100%,100%);
            }
        }
    }
</style>
