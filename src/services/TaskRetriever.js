import faker from 'faker';

const TaskRetriever = {
	getRndTask: () => TaskRetriever.toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }`),

	toProperCase: (text) => text.charAt().toUpperCase() + text.substr(1),
};

export default TaskRetriever;
