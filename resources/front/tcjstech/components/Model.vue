<template>
    <div name="modal">
        <div :class="fullscreen ? 'fullscreen' : bigscreen ? 'bigscreen' : ''" class="modal fade show" tabindex="1" role="dialog" style="display: block;">
            <div class="modal-dialog modal-dialog-scrollable animate__animated " :class="fullscreen ? 'animate__zoomIn' : bigscreen ? 'animate__pulse' : 'animate__slideInUp'" role="document">
                <div class="modal-content">
                    <div v-if="header" class="modal-header">
                        <slot name="header">Welcome</slot>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div v-if="footer" class="modal-footer">
                        <slot name="footer"></slot>
                        <button type="button" class="btn btn-danger" @click="$emit('close')">Close</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       header:{
           default: false,
           type: Boolean
       },
       footer:{
           default: false,
           type: Boolean
       },
       fullscreen:{
           default: false,
           type: Boolean
       },
       bigscreen:{
           default: false,
           type: Boolean
       }
    },
    mounted() {
        $("body").addClass("modal-open")
        this.$emit("onloaded")
    },
    destroyed() {
        $("body").removeClass("modal-open")
        this.$emit("onunloaded")
    }
}
</script>
<style scoped>
.bigscreen{
    padding: 0;
}
.bigscreen .modal-dialog{
    width: 80%;
}
.bigscreen .modal-content{
    top: 0;
    display: flex;
    flex-direction: column
}
.fullscreen{
    padding: 0;
}
.fullscreen .modal-dialog{
    width: 100%;
    top: 0;
    margin: 0;
    height: 100%;
}
.fullscreen .modal-content{
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0;
}
.fullscreen .modal-body{
    overflow: auto;
    height: 100%;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transition: scale(1.1) 0.3s ease;
    -moz-transition: scale(1.1) 0.3s ease;
    -o-transition: scale(1.1) 0.3s ease;
    transition: scale(1.1) 0.3s ease;
}
.modal{
    background-color: #0000008a;
}
.modal-header .close {
    position: absolute;
    right: 15px;
    top: 21px;
}
.modal-dialog {
    bottom: 0;
    position: absolute;
    width: 100%;
    margin: 0px;
    padding: 0;
}

.modal-content {
    margin: 0;
    padding: 0;
    border-radius: 0;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
}
.modal-footer {
    flex-direction: row;
    flex-wrap: unset;
    padding: 0;
}

.modal-footer button {
    width: 100%;
}
</style>
