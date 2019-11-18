import LinkModel from './LinkModel';

class ProjectInfo{
    title='';
    description='';
    media=[];
    links=[];

    constructor(title, description, media,links){
        this.title=title;
        this.description=description;
        this.media=media;
        this.links=links;
    }
}

export default ProjectInfo;

export const keyboard=new ProjectInfo('keyboard', 'A Java Application that Let\'s '+
'Your Computer Keyboard be a Piano Keyboard', ['./keyboard_view.png'],
[new LinkModel('Website for keyboard', 'https://matthewrobertsdev.github.io/keyboard/'),
new LinkModel('keyboard Github Repo', 'https://github.com/matthewrobertsdev/keyboard')])

export const bookmarkPage=new ProjectInfo('Bookmark Page', 'A react and redux application '+
'that let\'s you add, edit, delete, rearrange, save, and load bookmarks, with dark mode and '+
'light mode', [], [new LinkModel('Bookmark Page', 'https://matthewrobertsdev.github.io/BookmarkPage/index'),
new LinkModel('Bookmark Page Github Repo', 'https://github.com/matthewrobertsdev/bookmark-page')])

export const contactQR=new ProjectInfo('ContactQR', 'A project for an iOS app that lets you '+
'share your contact info using QR codes', [],
[new LinkModel('ContactQR Github repo', 
'https://github.com/matthewrobertsdev/ContactQR')])

export const dbConnectionManager=new ProjectInfo('DBConnectionManager for SQL in Java', 
'A Class for Managing Connections from Java Code to a SQL Database', [],
[new LinkModel('DBConnectionManager Github Repo', 
'https://github.com/matthewrobertsdev/DBConnectionManager-SQL-Java')])

export const softwareDeveloperLinks=new ProjectInfo('Software Developer Link Page', 
'A Page of Some Links for People Learning Software Development Built with React', [],
[new LinkModel('Developer Links Page', 
'https://matthewrobertsdev.github.io/SoftwareDevelopmentLinks/index'),
new LinkModel('Developer Links Github Repo', 
'https://github.com/matthewrobertsdev/software-development-links')])

export const portfolioPage=new ProjectInfo('Portfolio Page Source', 
'The Source to My Portfolio Page', [],
[new LinkModel('Portfolio Page Source', 
'https://github.com/matthewrobertsdev/portfolio/tree/source')])

export const projectInfos=[bookmarkPage, keyboard, contactQR, portfolioPage, dbConnectionManager, softwareDeveloperLinks];