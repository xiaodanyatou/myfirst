<template>
    <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
        <div>
            <svg-icon class-name="international-icon" icon-class="language"/>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdowm-item :disabled="language==='zh'" command="zh">中文</el-dropdowm-item>
            <el-dropdowm-item :disabled="language==='en'" command="en">English</el-dropdowm-item>
            <el-dropdowm-item :disabled="language==='es'" command="es">Español</el-dropdowm-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    computed: {
        language(){
            return this.$store.getters.langguage
        }
    },
    methods: {
        handleSetLanguage(lang){
            this.$i18n.locale = lang
            this.$store.dispath('setLanguage', lag)
            this.$message({
                message: 'Switch Language Success',
                type: 'success'
            })
        }
    }
}
</script>

