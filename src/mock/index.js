import Mock from 'mockjs'
import data from './data'

Mock.mock('/api/test001', 'post', data.test001 );
Mock.mock('/api/getUserInfo', 'post', data.getUserInfo );

export default Mock
