import { useLocation } from 'react-router-dom';

import { Flex, Text, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerHeader, DrawerCloseButton } from '@chakra-ui/react';
import { ReactComponent as MenuIcon } from 'assets/icons/icons8-menu.svg';
import MenuItem from '../MenuItem';

import { menuRoutes } from 'config/routes';

const HeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isActive = path => path === location.pathname;

  return (
    <>
			<IconButton
				variant="link"
				icon={<MenuIcon style={{height: "32px"}}/>}
				onClick={onOpen}
				mr={1}
			/>
			
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
							<img
								width="150"
								src="https://shipper.id/bos//assets/img/shipper-logo-new.png"
								alt="shipper-logo"
							/>
						</DrawerHeader>
            <DrawerBody>
            {
              menuRoutes.map(menu => (
                <MenuItem
                  to={menu.path}
                  key={menu.name}
                  active={isActive(menu.path) && true}
                  className={isActive(menu.path) ? "active" : ""}
                  onClick={onClose}
                >
                  <Flex ml={3} px={2} py={3} align="end">
                    {menu.icon}
                    <Text
                      fontSize="1em"
                      ml={1}
                    >
                      {menu.name}
                    </Text>
                  </Flex>
                </MenuItem>
              ))
            }
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default HeaderMenu;