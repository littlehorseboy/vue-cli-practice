<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link :to="{ name: 'Cart' }" class="navbar-brand">Open1999</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <!-- <ul class="navbar-nav mr-auto">
        </ul> -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div class="form-inline my-2 my-lg-0">
              <label for="searchRegion" class="text-light">搜尋地區: </label>
              <!--
                在下拉選單中 'select' tag 上使用 v-model 'option' 的選擇將會是 model 的 value
              -->
              <select id="searchRegion" class="form-control" v-model="searchRegion">
                <option value="all">全部</option>
                <option v-for="(option, index) in regionOption" :value="option" :key="index">
                  {{ option }}
                </option>
              </select>

              <div class="input-group">
                <input class="form-control" placeholder="Search" v-model="searchKeyword" @keyup.enter="handleWorkSearch">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" @click="handleWorkSearch">
                    <i class="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <span class="text-light">資料來源:</span>
          <span class="badge badge-dark">這裡那裡</span>
          <a target="_blank" href="http://data.kcg.gov.tw/dataset/open1999">資料出處：data.kcg.gov.tw</a>
        </form>
      </div>
    </nav>

    <!-- IF -->
    <div v-if="opendata.length === 0" class="alert alert-info" role="alert">
      很抱歉! 找不到您要的資訊
    </div>
    <!-- else -->
    <div v-else>
      <div class="alert alert-success" role="alert">
        總共查到: <span>$ {{ opendata.length }}</span> 筆資料
      </div>
      <!-- card -->
      <div class="row">
        <div class="col-md-4 col-sm-6" v-for="(item, index) in opendata" :key="index">
          <div class="card">
            <div class="card-body">
              <!-- <h5 class="card-title">Card title</h5> -->
              <p class="card-text">
                <span class="badge badge-warning">{{ item.ZipName_ }}</span>
                <span class="badge badge-secondary">{{ item.InformDesc_ }}</span>
                <span class="badge badge-info">{{ item.UnitName_ }}</span>
              </p>
              <div>
                <h3>
                  <a :href="getGoogleMap(item.address_)" target="_blank">{{ item.address_ }}</a>
                </h3>
                <p>{{ item.BeforeDesc_ }}</p>
                <small class="text-muted">反應日期: {{ item.Cre_Date_ }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end else -->
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchRegion: 'all',
      searchKeyword: '',
    };
  },
  created() {
    this.$store.dispatch('open1999');
  },
  computed: {
    ...mapGetters({
      opendata: 'getOpen1999',
      regionOption: 'getRegionOption',
    }),
  },
  methods: {
    ...mapActions([
    ]),
    getGoogleMap(address) {
      return `https://www.google.com/maps/place/${address}`;
    },
    handleWorkSearch() {
      this.$store.dispatch('opendataSearchKeyword', this.searchKeyword);
    },
  },
  /*
    當 select 改變時，會雙向綁定 option value
    因此我們監聽 `searchRegion`（預設是 all）
    將改變的 value 發出 action 改變 state
    state 改變 getter 將會重新計算，因此我們得到新的搜尋結果。
  */
  watch: {
    searchRegion(val) {
      // cosole.log('watch searchRegion?', searchRegion);
      this.$store.dispatch('opendataSearchRegion', val);
    },
  },
};
</script>

<style scoped>
</style>
