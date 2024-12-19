export const ROOM_IMAGES = {
    1: '/src/assets/images/default_double_bedroom.jpg',
    2: '/src/assets/images/default_double_bedroom.jpg',
    3: '/src/assets/images/default_single_bedroom.jpg',
    4: '/src/assets/images/default_single_bedroom.jpg',
    5: '/src/assets/images/junior_suite.jpg',
    6: '/src/assets/images/royal_double_bedroom.jpg',
    7: '/src/assets/images/family_suite.jpg',
    8: '/src/assets/images/room_with_a_view.jpg',
    9: '/src/assets/images/room_with_a_view.jpg',
    10: '/src/assets/images/honeymoon_suite.jpg',
};

export function getRoomImage(roomId) {
    return ROOM_IMAGES[roomId] || '/src/assets/images/default.jpg';
}