
/**
 * useMemo 第一个参数是()=>value
 * 第二个参数是依赖[m,n]，当m,n变化的时候才会重新执行useMemo缓存的value
 * 如果依赖不变，就重用之前的value
 * 相当于vue 的 computed
 *
 * 注意：
 * 如果value是一个函数，那么需要写成useMemo(()=>x=>log(x),[m])
 * 挺麻烦的，所以有了useCallback，就是useMemo的语法糖
 * 等价于useCallback(x=>log(x),[m])
 */


function xxx (){

}
