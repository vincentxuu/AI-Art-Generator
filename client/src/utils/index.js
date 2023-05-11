import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompts = surpriseMePrompts[randomIndex];

    if (randomPrompts === prompt) return getRandomPrompt(prompt)

    return randomPrompts;
}

export const downloadImage = async (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}