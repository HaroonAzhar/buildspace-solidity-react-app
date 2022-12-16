const main = async () => {
  //compile into a local  Ethereum network(like blockchain)
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  //submit our contract to the local Ethereum network
  const waveContract = await waveContractFactory.deploy();
  //excute the contract on the network
  await waveContract.deployed();
  //log out our action happening, just so we know it happened
  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
