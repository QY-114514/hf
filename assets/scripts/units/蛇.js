const {
    UnitEngine
} = UnitType;

const librarySnake = require("library-units");

const 飞鹰尾 = librarySnake.segment("飞鹰尾", {
    offsetSegment: 3,//每节身体包括与头之间的间隔
}, {});//尾巴

const 飞鹰 = librarySnake.segment("飞鹰", {
    offsetSegment: 3,//每节身体包括与头之间的间隔
}, {});//身体

const 飞鹰头 = librarySnake.head("飞鹰头", {
    body: 飞鹰,
    end: 飞鹰尾,
    lengthSnake: 20,//身体数量，实际数量是这个数，加上头部，再加上尾巴
}, {});//头部