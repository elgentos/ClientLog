<?php

class Elgentos_ClientLog_IndexController extends Mage_Core_Controller_Front_Action
{
	public function indexAction() {
		print 'This page is not supposed to be reached this way. Now shoo!';
		if(Mage::getStoreConfig('dev/log/clientside')) {
			Mage::log($_POST,null,'clientside_javascript_error.log');
		}
	}
}
