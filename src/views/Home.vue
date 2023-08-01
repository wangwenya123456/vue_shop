<template>
    <el-container>
        <!-- 头部 -->
        <el-header height="90px">
            <div class="header">CANVAS</div>
        </el-header>
        <el-container class="middle-div">
            <!-- 左侧菜单 -->
            <el-aside :width="isCollapse ? '' : '200px'">
                <div class="el-icon-s-open" @click="hideMenu()"></div>
                <el-menu class="el-menu-vertical-demo" background-color="#fff" text-color="#303133"
                    active-text-color="#409eff" router :default-active="currentNavId" :collapse="isCollapse"
                    :collapse-transition="false">
                    <el-submenu :index="item.id" v-for="item in menuData" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ item.type }}</span>
                        </template>
                        <el-menu-item :index="subItem.id" v-for="subItem in item.children" :key="subItem.id"
                            :route="getMenuRoute(subItem)" @click="saveNavUrl(subItem)">{{
                                subItem.type
                            }}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右侧主体 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script>
import { MenuData } from '@/utils/data.js';
export default {
    name: 'app',
    data() {
        return {
            menuData: MenuData,
            isCollapse: false,
            currentNavId: '',
        }
    },
    created() {
        this.currentNavId = this.$route.query.id || window.sessionStorage.getItem('currentNavId');
    },
    methods: {
        getMenuRoute(data) {
            return {
                path: '/list',
                query: {
                    id: data.id
                }
            }
        },
        hideMenu() {
            this.isCollapse = !this.isCollapse;
        },
        saveNavUrl(item) {
            window.sessionStorage.setItem('currentNavId', item.id)
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    font-size: 20px;
    font-weight: 800;
    background: url('~@/assets/img/header.jpg') no-repeat;
    background-size: 100% 100%;
}

.el-container {
    height: 100%;

    .el-main {
        padding: 0 20px 20px 20px;
    }

    .middle-div {
        height: calc(100% - 90px);

        .el-icon-s-open {
            display: flex;
            justify-content: center;
        }
    }

    .el-header {
        padding: 0;
    }

    .el-menu {
        height: 100%;
        border-right: none;
    }

    /*从这里开始滚动条走起*/
    aside.el-aside::-webkit-scrollbar {
        width: 10px;
    }

    /*滑块*/
    aside.el-aside::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #e0e0e0;
        -webkit-box-shadow: 0 0 5px #fff inset;
    }

    /*轨道*/
    aside.el-aside::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, .3);
    }
}
</style>
  
  