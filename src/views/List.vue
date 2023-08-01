<template>
    <div class="each-row">
        <div v-for="(item, index) in listData" :key="item.id" class="each-item">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgUrl" class="image" @click="gotoDetail(item)">
                <div style="padding: 14px;">
                    <span>{{ item.name }}</span>
                    <div class="detail">
                        <div class="content">
                            <div class="price">{{ item.price }}</div>
                            <div class="capacity pd-left">{{ item.capacity }}</div>
                        </div>
                        <div class="detail-btn" @click="gotoDetail(item)">详情</div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>
  
<script>
import { productDatas } from '@/utils/data.js';
import { Switch } from 'element-ui'
export default {
    components: {
        Switch,
    },
    data() {
        return {
            listData: productDatas.get(this.$route.query.id),
        };
    },
    created() {

    },
    watch: {
        "$route.query.id": {
            handler(val) {
                this.listData = productDatas.get(val);
            }
        }
    },
    methods: {
        gotoDetail(item) {
            window.open(`https://www.canvasbeauty.com.hk/cn/products_details.php?id=${item.id}`);
        }
    }
}
</script>

<style lang="less" scoped>
.each-row {
    display: flex;
    flex-wrap: wrap;

    .each-item {
        width: 24%;
        padding-right: 10px;
        padding-bottom: 10px;
    }
}

.detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
    line-height: 12px;

    .content {
        display: flex;
        align-items: center;

        .price,
        .capacity {
            font-size: 13px;
            color: #999;
        }

        .pd-left {
            padding-left: 8px;
        }
    }

    .detail-btn {
        color: #409EFF;
        cursor: pointer;
        font-size: 12px;
    }
}

.image {
    width: 100%;
    display: block;
    height: 350px;
    cursor: pointer;
}
</style>
  
  