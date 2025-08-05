import crypto from "crypto";
import bcrypt from "bcrypt";

export async function verify(token, hash) {
    const [, tokenID] = token.split('|');
    return bcrypt.compare(tokenID, hash);
};

export function hash() {
    const id = crypto.randomBytes(10).toString("hex");
    const context = crypto.randomBytes(10).toString("hex");
    return `${id}|${context}`;
};

export async function token(encrypt) {
    const [, plainText] = encrypt.split('|');
    return bcrypt.hash(plainText, 10);
};