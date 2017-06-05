/**
 * Created by luyang on 2017/6/1.
 */
import create from './create';
import getAll from './getAll';
import getByName from './getByName';
import remove from './remove';
import send from './send';

function eTrack () {
    /**
     * 处理参数
     * 如：
     * eTrack('create', 'UA-XXXXX-Y', 'auto', 'name')
     * eTrack('send', 'UA-XXXXX-Y', 'auto', 'name')
     * 或者
     * eTrack({method: 'create', trackingId: 'UA-XXXXX-Y', cookieDomain: 'auto', trackerName: 'name'})
     * eTrack({method: 'send', hitType: 'event', text: 'auto', value: 'name'})
     */
}
/**
 * 存放tracker的array
 * @type {Array}
 */
eTrack.trackers = [];

/**
 * 创建tracker实例的方法
 * @type {Function}
 */
eTrack.create = create;

/**
 * 获取所有tracker实例的方法，return Array[Tracker, Tracker...]
 * @type {Function}
 */
eTrack.getAll = getAll;

/**
 * 按照名字获取Tracker实例，return Tracker
 * @type {Function}
 */
eTrack.getByName = getByName;

/**
 * 按照名字移除Tracker实例
 * @type {Function}
 */
eTrack.remove = remove;

/**
 * 传入name和data，找到name对应的tracker，发送data
 * 详情请看函数内部注释
 * @type {Function}
 */
eTrack.send = send;



module.exports = eTrack;
