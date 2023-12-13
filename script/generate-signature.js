const { MAX_INTEGER } = require("ethereumjs-util");
const { ethers } = require("ethers");
//私钥
require('dotenv').config();
const privateKey = process.env.PRIVATE_KEY;

// UserOperation 对象
const userOperation = {
    sender:"0x80587EFE7fD33F4b4805bDB2f16C760b15a14686",
    nonce:"0x1",
    initCode:"0x",
    callData:"0xbe0e67a3",
    callGasLimit:"0xC350",
    verificationGasLimit:"0x186A0",
    preVerificationGas:"0xabe0",
    maxFeePerGas:"0x89afcd800",
    maxPriorityFeePerGas:"0x89afcd800",
    paymasterAndData:"0x",
};
 async function main() {
// 将 UserOperation 对象序列化
const serializedUserOperation = ethers.utils.defaultAbiCoder.encode(
    ["address", "uint256", "bytes", "bytes", "uint256", "uint256", "uint256", "uint256", "uint256", "bytes"],
    [userOperation.sender, userOperation.nonce, userOperation.initCode, userOperation.callData, userOperation.callGasLimit, userOperation.verificationGasLimit, userOperation.preVerificationGas, userOperation.maxFeePerGas, userOperation.maxPriorityFeePerGas, userOperation.paymasterAndData]
);

// 创建哈希
const hash = ethers.utils.keccak256(serializedUserOperation);

// 签名
const wallet = new ethers.Wallet(privateKey);
const signature = await wallet.signMessage(ethers.utils.arrayify(hash));

// 将签名附加到 UserOperation 对象
userOperation.signature = signature;
console.log(signature)
 }
 main()