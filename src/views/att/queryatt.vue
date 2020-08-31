<template>
  <div>
    <keep-alive>
      <el-autocomplete
        v-model="SKey"
        clearable
        popper-class="my-autocomplete"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      >
        <i
          slot="suffix"
          class="el-icon-edit el-input__icon"
          @click="handleIconClick"
        />
        <template slot-scope="{ item }">
          <div class="name">{{ item.NAME }}</div>
        </template>
      </el-autocomplete>
    </keep-alive>
    <el-button type="primary" size="small" icon="search" @click="getNameList">查 询</el-button>
  </div>
</template>

<script>
export default {
  name: 'Queryatt',
  components: {},
  data() {
    return {
      restaurants: [],
      SKey: ''
    }
  },

  computed: {},

  created() {
  },

  mounted() {
  },

  methods: {
    getNameList() {
      const that = this
      this.$http({
        method: 'get',
        url: 'http://113.98.232.85:8080/ATTAPI/api/ATT/GetNameInfo'
      }).then(res => {
        that.restaurants = res.data.list
      })
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.USERID.toLowerCase().indexOf(queryString.toLowerCase()) === 0 || restaurant.NAME.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect(item) {
      this.SKey = item.NAME
    },
    handleIconClick(ev) {

      // console.log(ev);
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
