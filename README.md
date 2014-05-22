naoko_page
==========

go-naoko.com: my profile


how to deploy:
$ cd ansible_play
$ ansible-playbook -c paramiko --private-key ~/.ssh/naoko-ec2.pem -i hosts/hosts_aws playbook/web.yml