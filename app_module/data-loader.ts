import path from "path";
import fsPromises from "fs/promises"


export async function getFeature() {

    const filePath = path.join(process.cwd(), 'public/asset/feature.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const feature = JSON.parse(jsonData);
    return feature['feature']
}

export async function getSkill() {

    const filePath = path.join(process.cwd(), 'public/asset/skill.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const skill = JSON.parse(jsonData);
    return skill['skill']
}

export async function getProject() {

    const filePath = path.join(process.cwd(), 'public/asset/project.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const project = JSON.parse(jsonData);
    return project['project']
}

export async function getPhoto() {
    const filePath = path.join(process.cwd(), 'public/asset/photo.json');
    const jsonData: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    const photo = JSON.parse(jsonData);
    return photo['photo']
}

export async function getWallpaper() {
    const filePath = path.join(process.cwd(), 'public/asset/wallpaper.json');
    const wallpaper: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    return JSON.parse(wallpaper);
}

export async function getPost() {

    const filePath = path.join(process.cwd(), 'public/asset/post.json');
    const jsonData: Buffer = await fsPromises.readFile(filePath);
    // @ts-ignore
    return JSON.parse(jsonData);
}

export async function getMarkdown(fileName) {

    const filePath = path.join(process.cwd(), `public/asset/post/${fileName}/${fileName}.md`);
    const markdown: string = await fsPromises.readFile(filePath, "utf8");
    // @ts-ignore
    return markdown
}

export async function getSocial() {

    const filePath = path.join(process.cwd(), 'public/asset/social.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const social = JSON.parse(jsonData);
    return social['social']
}

export async function getFriend() {

    const filePath = path.join(process.cwd(), 'public/asset/friend.json');
    const jsonData = await fsPromises.readFile(filePath);

    // @ts-ignore
    const friend = JSON.parse(jsonData);
    return friend['friend']
}