import TaskRetriever from './TaskRetriever';

describe('task Retriever', () => {
	const { getRndTask, toProperCase } = TaskRetriever;

	test('getting a random task using faker', () => {
		const result = getRndTask();

		expect(result).toEqual(expect.any(String));
	});

	test('to Proper Case', () => {
		const text = 'increase bandwidth';

		const result = toProperCase(text);

		expect(result).toEqual('Increase bandwidth');
	});
});
