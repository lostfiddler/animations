import { readFileSync } from 'node:fs';
import {data} from './bookData.js'

export default (props) => {
    const { request, res } = props;

    if(request.url === '/') {
        res.writeHead(200, {
            'access-control-allow-origin': '*'
        })
        res.write(readFileSync('../frontEnd/index.html', 'utf8'));
        res.end();
        return;
    }

    if(['HTM5_Canvas', 'foundation_html5_for_animation', 'nature_of_code'].some(boook => request.url.includes(boook))) {
        res.writeHead(200, {
            'access-control-allow-origin': '*',
            'content-type': mime_type(request.url.slice(request.url.lastIndexOf('.')))
        })
        res.write(readFileSync('../frontEnd/data' + request.url))
        res.end();
        return;
    }

    if(['.html', '.css', '.js', '.png', '.svg', '.ttf'].some(ext => request.url.includes(ext))) {
        res.writeHead(200, {
            'access-control-allow-origin': '*',
            'content-type': mime_type(request.url.slice(request.url.lastIndexOf('.')))
        })
        res.write(readFileSync('../frontEnd' + request.url))
        res.end();
        return;
    }

    if(request.url === '/get-books') {
        res.writeHead(200, {'access-control-allow-origin': '*'});
        res.write(JSON.stringify(data));
        res.end();
        return;
    }
}

function mime_type(ext) {
    return {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.ttf': 'font/ttf'
    }[ext]
}
