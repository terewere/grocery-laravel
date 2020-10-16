const ImageSelect = {


    methods: {

        readFileContent(file) {
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
                reader.onload = event => resolve(event.target.result);
                reader.onerror = error => reject(error);
                reader.readAsText(file);
            });
        },


        choosePassPic() {
            this.$refs.filePic.click();
        },


        readPassPicURL(e) {
            const input = this.$refs.filePic;
            const files = input.files;
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.form.imgUrl = e.target.result;
                };
                reader.readAsDataURL(files[0]);
                this.$emit("input", files[0]);
            }
        },

        readFileUrl(index) {
            const input = this.$refs.doc_file;

            const files = input[index].files;

            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.form.documents[index].file = e.target.result;
                };
                reader.readAsDataURL(files[0]);
                this.$emit("input", files[0]);
            }
        },




    }

}

export default ImageSelect