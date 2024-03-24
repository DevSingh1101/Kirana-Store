const timeoutMessage: string = "API call is timedout!";

function post<T>(api: string, body?: string): Promise<T> {
    return new Promise((resolve, reject) => {
        fetch(api, {
            credentials: "include",
            method: "post",
            body: body || "{}",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res: Response) => {
                if (res.status === 200) {
                    resolve(
                        res.text().then((data) => {
                            try {
                                return JSON.parse(data);
                            } catch (ex) {
                                if (data) {
                                    const message = data.includes("Timeout of")
                                        ? timeoutMessage
                                        : data;
                                    return {
                                        message,
                                    };
                                }
                                return ex;
                            }
                        }) as Promise<T>
                    );
                }
                reject(res);
            })
            .catch((error: any) => reject(error));
    });
}

export default {};
