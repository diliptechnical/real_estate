<template>
    <div class="form-group text-left mb-4" v-if="type=='file'">
        <label :class="classes ? classes : 'hide'" :for="id"><slot><i class="lni lni-check"></i></slot></label>
        <input class="form-control" :class="tclass" :id="id" @change="onFileChange" type="file" :placeholder="placeholder">
    </div>
    <div class="form-group text-left mb-4" v-else>
        <span class="labe" v-if="vl">{{placeholder}}</span>
        <label :class="classes ? classes : 'hide'" :for="id"><slot><i class="lni lni-check"></i></slot></label>
        <input
        minlength="4"
        :class="tclass"
        class="form-control"
        :id="id" :name="name"
        v-model="vl"
        :type="type ? type : 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        />

    </div>
</template>

<script>
export default {
  props: ['name', 'id', 'placeholder', 'tclass', 'type', 'label','value','disabled','classes'],
  name: 'MssText',
  data () {
    return {
      vl: this.value
    }
  },
  mounted() {
      setTimeout(() => {
        this.vl= this.value
      }, 1000);

  },
  methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    },
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
            vm.image = e.target.result;
            console.log()
            this.$emit("input",e.target.result);
        };
        reader.readAsDataURL(file);
    },
     saveFile(base64path,filename){
        $.ajax({
            "method": 'POST',
            "url": this.URL_ROOT+'admin/savemedia',
            "data": {
                file:base64path,
                name: filename,
                folder: this.folder
            },
            "success": (response)=>{
                console.log(response);
            }
        })
    },
  },
  watch: {
    vl: function (vll) {
      this.vl = vll
      this.$emit('input', this.vl)
    }
  }
}
</script>
