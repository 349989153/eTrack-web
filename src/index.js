/**
 * Created by luyang on 2017/6/1.
 */

/**
 * Overview：
 * 首先获取配置（从远端或者本地拿），
 * 获取到了之后，根据配置在根节点（document）上添加事件监听，
 * 在capture阶段添加事件监听，这样就能捕获到所有的元素的事件，
 * 在最开始的时候，使用create方法，参数传入uid，来保证这些事件都会记录到这个uid名下。
 * 然后调用send方法给服务器发请求
 */
import eTrack from './eTrack';

export default eTrack;