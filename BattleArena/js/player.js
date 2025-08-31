// Player object constructor
let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

// Player moves and attack logic
let PlayerMoves = {
    calcAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // Check who attacks first
        if (getPlayerSpeed >= getEnemySpeed) {
            // Player attacks
            let playerAttackValues = this.attack(player);
            enemy.health -= playerAttackValues.totalDamage;
            alert(`You hit ${playerAttackValues.damage} damage ${playerAttackValues.hits} times.`);

            if (enemy.health <= 0) {
                alert("You win! Refresh the browser to play again.");
                getEnemyHealth.innerHTML = "Health: 0";
                return;
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            }
            // Enemy counterattacks if still alive
            this.enemyAttack(getPlayerHealth);
        } else {
            // Enemy attacks first
            this.enemyAttack(getPlayerHealth);
            if (player.health > 0) this.attack(enemy); // Player counterattacks
        }
    },

    // Calculate attack values
    attack: function(attacker) {
        let damage = (attacker.mana > 0) ? attacker.strength * attacker.mana / 1000 : attacker.strength * attacker.agility / 1000;
        let offset = Math.floor(Math.random() * 10);
        let totalDamage = damage + offset;
        let hits = Math.floor(Math.random() * Math.floor(attacker.agility / 10) / 2) + 1;
        return { totalDamage: totalDamage * hits, damage: totalDamage, hits };
    },

    // Enemy attack function
    enemyAttack: function(getPlayerHealth) {
        let enemyAttackValues = this.attack(enemy);
        player.health -= enemyAttackValues.totalDamage;
        alert(`Enemy hit ${enemyAttackValues.damage} damage ${enemyAttackValues.hits} times.`);
        if (player.health <= 0) {
            alert("You lose! Refresh the browser to play again.");
            getPlayerHealth.innerHTML = "Health: 0";
        } else {
            getPlayerHealth.innerHTML = "Health: "
        }
      }
    };