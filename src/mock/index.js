import Mock from 'mockjs'
import data from './data'

Mock.mock('/user/login', 'post', data.test001 );

export default Mock