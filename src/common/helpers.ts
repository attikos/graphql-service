/**
 * Decorator. Fix _id to id in response
 * @returns
 */
export const normalizeId = function (target: any, name: string, descriptor: PropertyDescriptor) : any {
    const original = descriptor.value;

    if (typeof original === 'function') {
        descriptor.value = function(...args: any[]) {
            try {
                const result = original.apply(this, args);

                return result.then((res: any) => {
                    if (res) {
                        const data = {...res, id: res._id};
                        delete data._id;
                        return data;
                    }

                    return null;
                });
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }

    return descriptor;
}
