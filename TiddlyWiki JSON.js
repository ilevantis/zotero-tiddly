{
	"translatorID": "faaac503-93a6-48ae-b18d-3cfba59b34ba",
	"label": "TiddlyWiki JSON",
	"creator": "IL",
	"target": "json",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"displayOptions": {
		"exportCharset": "UTF-8xBOM",
		"exportNotes": false
	},
	"inRepository": false,
	"translatorType": 2,
	"lastUpdated": "2016-06-21 08:45:20"
}



function doExport() {
	const tiddlers = [];
	let item;
	while (item = Zotero.nextItem()) {

		let auths = [];
		for (i = 0; i < item.creators.length; i++) {
			auths.push((item.creators[i].firstName ? item.creators[i].firstName + ' ' : '') + item.creators[i].lastName);
		}

		let tiddler = {
			papertitle : item.title,
			title: item.citationKey,
			journal : item.publicationTitle,
			doi : item.DOI,
			year : ZU.strToDate(item.date).year,
			abstract : item.abstractNote,
			authors : auths.join(", "),
			type : "text/paper",
			tags : "paper"
		};
		tiddlers.push(tiddler)
	}
	Zotero.write(JSON.stringify(tiddlers));
}
