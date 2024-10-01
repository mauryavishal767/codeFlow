const language_id ={
    cpp: 105,
    java: 91,
    javascript: 102,
    python: 100,
}

function errorType(id) {
    switch (id) {
        case 5:
            return "Time Limit Exceeded"
        case 6:
            return "Compilation Error"
        case 7:
            return "Runtime Error (SIGSEGV)"
        case 8:
            return "Runtime Error (SIGXFSZ)"
        case 9:
            return "Runtime Error (SIGFPE)"
        case 10:
            return "Runtime Error (SIGABRT)"
        case 11:
            return "Runtime Error (NZEC)"
        case 12:
            return "Runtime Error (Other)"
        case 13:
            return "Internal Error"
        case 14:
            return "Exec Format Error"
        default:
            return null
    }
}

const POST = async (code,input,language)=>{
    const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '349c0304b8msh1503c76981ac2b1p194d66jsnef79049ea26a',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language_id: language_id[language],
            source_code: btoa(code),
            stdin: btoa(input)
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.token
    } catch (error) {
        console.error({error});
    }
    
}

const GET = async (token)=>{
    const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '349c0304b8msh1503c76981ac2b1p194d66jsnef79049ea26a',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error({error});
    }
}

export const fetchAPI = async (code,input,language)=>{
    const token = await POST(code,input,language);

    let statusCode = 1;
    let response;

    while(statusCode === 1 || statusCode === 2){
        response = await GET(token);
        statusCode = response.status_id
    }

    if(errorType(response.status_id)){
        return {type: 'error', data: errorType(response.status_id)}
    } else{
        return {type: 'success', data: response.stdout}
    }
}