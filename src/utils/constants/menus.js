const { TbHome, TbList, TbPhotoSensor, TbNotes } = require('react-icons/tb');

const MENUS = [
  {
    title: 'Home',
    icon: <TbHome size={24}></TbHome>,
    path: '/',
    needActiveUser: false,
  },
  {
    title: 'Scan',
    icon: <TbPhotoSensor size={24}></TbPhotoSensor>,
    path: '/scan',
    needActiveUser: false,
  },
  {
    title: 'History',
    icon: <TbList size={24}></TbList>,
    path: '/history',
    needActiveUser: true,
  },
  {
    title: 'Fishpedia',
    icon: <TbNotes size={24}></TbNotes>,
    path: '/fishpedia',
    needActiveUser: false,
  },
];

export default MENUS;
