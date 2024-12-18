import { createServer } from 'miragejs';

function creationServer() {
  createServer({
    routes() {
      console.log('MirageJS server is running');

      this.post('/api/execute', (schema, request) => {
        const { language, code } = JSON.parse(request.requestBody);

        if (code.includes('error')) {
          return { status: 'error', error: 'SyntaxError: Unexpected token' };
        }

        return { status: 'success', output: `Code executed successfully in ${language}.\n` };
      });
    },
  });
}

export default creationServer