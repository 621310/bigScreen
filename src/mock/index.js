import Mock from 'mockjs'
import data from './data'

Mock.mock('/api/test001', 'post', data.test001 );

export default Mock