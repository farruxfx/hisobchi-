import { randomBytes, pbkdf2Sync, timingSafeEqual } from "crypto";

const ITERATIONS = 100_000;
const KEYLEN = 64;
const DIGEST = "sha512";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST).toString("hex");
  return `${ITERATIONS}:${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [iterationsRaw, salt, originalHash] = stored.split(":");
  const iterations = Number(iterationsRaw);
  if (!salt || !originalHash || Number.isNaN(iterations)) {
    return false;
  }
  const hash = pbkdf2Sync(password, salt, iterations, KEYLEN, DIGEST).toString("hex");
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(originalHash, "hex"));
}
