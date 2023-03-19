const { TbHome, TbList, TbPhotoSensor, TbNotes } = require('react-icons/tb');

const MENUS = [
  {
    title: 'Home',
    icon: <TbHome size={24}></TbHome>,
    path: '/',
  },
  {
    title: 'Scan',
    icon: <TbPhotoSensor size={24}></TbPhotoSensor>,
    path: '/scan',
  },
  {
    title: 'History',
    icon: <TbList size={24}></TbList>,
    path: '/history',
  },
  {
    title: 'Fishpedia',
    icon: <TbNotes size={24}></TbNotes>,
    path: '/fishpedia',
  },
];

export default MENUS;
