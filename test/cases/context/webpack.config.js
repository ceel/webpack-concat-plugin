import path from 'path'
import ConcatPlugin from '../../../index';

module.exports = {
    entry: './index.js',
    plugins: [
        new ConcatPlugin({
            name: 'file',
            fileName: '[name].js',
            filesToConcat: ['./a.js', './b.js', 'is-object'],
            context: path.join(__dirname, '../../fixtures/')
        })
    ],
};
