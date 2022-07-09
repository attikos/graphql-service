/**
 * Decorator. Fix _id to id in entity
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

                    return res;
                });
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }

    return descriptor;
}

/**
 * Decorator. Fix _id to id in array of entities: response.items
 */
 export const normalizeItemsId = function (target: any, name: string, descriptor: PropertyDescriptor) : any {
    const original = descriptor.value;

    if (typeof original === 'function') {
        descriptor.value = function(...args: any[]) {
            try {
                const result = original.apply(this, args);

                return result.then((res: any) => {
                    if (res) {
                        const updatedRes = { ...res };

                        if (updatedRes._id) {
                            updatedRes.id = updatedRes._id;
                        }

                        if (updatedRes.items) {
                            updatedRes.items = updatedRes.items.map((item : any) => {
                                if (item._id) {
                                    item.id = item._id;
                                }

                                return item;
                            });
                        }

                        return updatedRes;
                    }

                    return res;
                });
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }

    return descriptor;
}
