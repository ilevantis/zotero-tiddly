{
	"translatorID": "7b9fc4f3-ef96-4bb2-a7e3-087da12f6ac4",
	"label": "TiddlyWiki Export",
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
	let item;
	var jstring = 'javascript:(function(){$tw.wiki.addTiddlers([';
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
		jstring += 'new $tw.Tiddler($tw.wiki.getModificationFields(),' + JSON.stringify(tiddler) + '),'
	}
	jstring += '])})();'
	Zotero.write(jstring);
}
