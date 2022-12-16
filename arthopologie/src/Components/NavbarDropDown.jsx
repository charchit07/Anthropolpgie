import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  ListItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function NavbarDropDown() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            // _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>
            {subLabel.map((el) => (
              <li type="none" _hover={{ textDecoration: "underline" }}>
                {el}
              </li>
            ))}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

const NAV_ITEMS = [
  {
    label: "Gift",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Explore All Gifts",
          " Stocking Stuffers",
          "Giftables",
          "Gifts for Her",
          "Candle Gifts &Sets",
        ],
        href: "#",
      },
      {
        label: "Featured",
        subLabel: [
          "The Pet Shop",
          "The Game Shop",
          "The George & Viv Holiday Shop",
          "The One-Size Gift Shop",
          "Terrian Holiday Shop",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "New!",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Accessories",
          "Beauty & Wellness",
          "Clothng",
          "Dresses",
          "Home & Furniture",
          "Jewelry",
          "Petites",
          "Plus",
          "Shoe",
          "BHLDN Weddings",
        ],
        href: "#",
      },
      {
        label: "Featured",
        subLabel: [
          "New Today:Clothing & Accessories",
          " Trending:Metallic & Shine",
          "The Velvet Shop",
          "House of Hackney",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Dress",
    children: [
      {
        label: "Shop bu Cateory",
        subLabel: [
          "Shop All Dresses",
          "New!",
          "Top Rated Dresses",
          "Ocassionns & Party Dresses",
          "Lounge & Casual Dresses",
          "Formal Dresses",
          "Maxi Dresses",
        ],
        href: "#",
      },
      {
        label: "Features Shops",
        subLabel: [
          "Velvet Dresses",
          "Trending:Tulle",
          "Little Black Dresses",
          "Little White Dresses",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Clothing",
    children: [
      {
        label: "Shop Category",
        subLabel: [
          "Shop All Clothing",
          "New!",
          "Top-Rated",
          "Activewear",
          "Blazers",
          "Dresses",
          "Getaway& Resort Wear",
          "Intimates & Lingerie",
          "Jackets & Coats",
          "Jeans",
          "Jumpsuits",
        ],
        href: "#",
      },
      {
        label: "Featured",
        subLabel: [
          "The Holiday Party Shop",
          " Trending:Metallic & Shine",
          "The Velvet Shop",
          "The Cozy Adventure Shop",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Shoes",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Shop All Shoes",
          "New!",
          "Top-Rated",
          "Boot & Booties",
          "Cold Weather Boots",
          "Flats",
        ],
        href: "#",
      },
      {
        label: "Brand We Love",
        subLabel: ["ON", "Bibi Lou", "Silent D", "Sore!", "UGG"],
        href: "#",
      },
    ],
  },
  {
    label: "Accessories",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Shop All Accessories",
          "Top-Rated",
          "Bag & Small Accessories",
          "Belts",
          "Gloves",
          "Hair Accessories",
        ],
        href: "#",
      },
      {
        label: "Explore Jewelry",
        subLabel: [
          "Necklaces",
          "Earrings",
          "Bracelets",
          "Rings",
          "Hoop Shop",
          "Shop All Jewelry",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "BHLDN Weddings",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Explore All BHLDN Weddings",
          " Book An Appointment",
          "Shop All Weddings",
          "New!",
          "Top Rated Styles",
          "Bride",
          "Wedding Dresses",
        ],
        href: "#",
      },
      {
        label: "Bridal by Styles",
        subLabel: [
          "Morden Bride",
          " Bohemain Bride",
          "Beach & Destination Bride",
          "City Hall Bride",
          "Romantic Bride",
          "Classic Bride",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Home & Furniture",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Explore All Home & Furniture",
          " New!",
          "Bath",
          "Beeding",
          "Candle & Home Fragrance",
          "Decor",
          "Furniture",
        ],
        href: "#",
      },
      {
        label: "AnthroLiving House Tours",
        subLabel: [
          "Less Is More",
          "House of Hackney",
          "A Sense of Place",
          "*Sol*ful Spaces",
          "The Story Of Home",
          "Be Our Guest",
          "True Nature",
          "Lit From Within",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Beauty & Wellness",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Shop All Beauty & Wellness",
          "New!",
          "Top-Rated",
          "Beauty Gifts & Sets",
          "Bath & Body",
          "Candles & Home Fragrance",
        ],
        href: "#",
      },
      {
        label: "Featured",
        subLabel: [
          "The George & Viv Holiday Shop",
          " Anthropologie Exclusives",
          "Beauty Gifts Under $25",
          "Travel Size",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Garden & Outdoor",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Shop All Garden & Outdoor",
          " Planters",
          "Garden & Utility",
          "Outdoor Living",
          "Furniture",
          "Plant & Flowers",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Sale",
    children: [
      {
        label: "Shop by Category",
        subLabel: [
          "Shop All Sales",
          "Freshly Cut",
          "Accessories",
          "Beauty & Wellness",
          "Clothing",
          "Home & Furniture",
        ],
        href: "#",
      },
      {
        label: "Shop by Price",
        subLabel: ["Under $25", " Under $50", "Under $75", "Under $100"],
        href: "#",
      },
    ],
  },
];
