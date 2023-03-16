// import { Markdown } from '../../src/widgets/markdown';

// describe('fromJson', () => {
//   it('creates Markdown object', () => {
//     const mockFromJSONArgs = {
//       id: 'test-markdown',
//       displayName: 'test-display-name',
//       type: 'test-type',
//       text: 'hello-world',
//       showDisplayName: true,
//       description: 'test-description',
//       showDescription: true
//     };

//     const mockFromJSONResult = new Markdown(
//       'test-markdown',
//       'test-display-name',
//       'test-type',
//       'hello-world',
//       true,
//       'test-description',
//       true
//     );

//     const result = Markdown.fromJson(mockFromJSONArgs);
//     expect(result).toBeInstanceOf(Markdown);
//     expect(result).toEqual(mockFromJSONResult);
//   });
// });

// describe('toJson', () => {
//   it('creates raw JSON from Markdown object', () => {
//     const mockMarkdownObject = new Markdown(
//       'test-markdown',
//       'test-display-name',
//       'test-type',
//       'hello-world',
//       true,
//       'test-description',
//       true
//     );

//     const mockToJSONResult = {
//       id: 'test-markdown',
//       displayName: 'test-display-name',
//       type: 'test-type',
//       text: 'hello-world',
//       showDisplayName: true,
//       description: 'test-description',
//       showDescription: true,
//       providerId: ''
//     };

//     const result = mockMarkdownObject.toJson();
//     expect(result).toEqual(mockToJSONResult);
//   });
// });

// describe('getData', () => {
//   it('does nothing', () => {
//     const mockMarkdownObject = new Markdown(
//       'test-markdown',
//       'test-display-name',
//       'test-type',
//       'hello-world',
//       true,
//       'test-description',
//       true
//     );
    
//     const result = mockMarkdownObject.getData();
//     expect(result).toBeUndefined();
//   });
// });