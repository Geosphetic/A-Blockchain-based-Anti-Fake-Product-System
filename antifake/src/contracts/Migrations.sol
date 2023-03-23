pragma solidity >=0.5.16;

contract Migrations {
  address public owner;
  uint public last_completed_migration;
  uint public constant MAX_MIGRATION_STEPS = 30; // Maximum number of migration steps

  modifier restricted() {
    require(msg.sender == owner, "Only the contract owner can call this function.");
    _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    require(completed <= MAX_MIGRATION_STEPS, "Invalid migration step."); // Check if completed step is valid
    last_completed_migration = completed;
  }

  function getOwner() public view returns (address) {
    return owner;
  }

  function getLastCompletedMigration() public view returns (uint) {
    return last_completed_migration;
  }

  function upgrade(address newAddress) public restricted {
    Migrations upgraded = Migrations(newAddress);
    upgraded.setCompleted(last_completed_migration);
  }
}
