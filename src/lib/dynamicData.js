const designFiles = require.context('assets/images/designs/');
const typeFiles = require.context('assets/images/tshirts/');

const filesByName = (filename) => {
	return {
		name: (/\.\/(.*)\..{1,4}/).exec(filename)[1],
		file: filename,
	}
}

const nameToFile = (name, list) => list.filter(item => item.name === name)[0].file;

const designs = designFiles.keys().map(filesByName);
const types = typeFiles.keys().map(filesByName);

export const getDesigns = () => designs;
export const getDesign = (name) => designFiles(nameToFile(name, designs), true);

export const getTypes = () => types;
export const getType = (name) => typeFiles(nameToFile(name, types), true);