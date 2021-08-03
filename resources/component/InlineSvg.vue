<template>
    <div :id="ids" :class="name + ' ' + classes"
    v-html="require('!html-loader!../svg/'+name+'.svg')"
    ></div>
</template>
<script>
export default {
    props:{
        name :{
            type:String,
            required: true
        },
        classes :{
            type:String,
            required: false,
            default:''
        },
        ids :{
            type:String,
            required: false,
            default:''
        }

    }
}
</script>
