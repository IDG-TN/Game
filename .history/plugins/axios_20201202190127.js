import { cacheAdapterEnhancer } from "axios-extensions";
import LRUCache from "lru-cache"; // 为了自定义缓存配置，如果不需要，可以不使用

export default function({ $axios, redirect }) {
  // 请求中使用了useCache: true的话，会被缓存起来以便下次直接返回从而减少服务器压力
  let defaultAdapter = $axios.defaults.adapter;
  let cacheCfg = new LRUCache({
    maxAge: 1000 * 100, //有效期10s
    max: 1000 // 最大缓存数量
  });
  $axios.defaults.adapter = cacheAdapterEnhancer(defaultAdapter, {
    enabledByDefault: false,
    cacheFlag: "useCache",
    defaultCache: cacheCfg
  });
}
